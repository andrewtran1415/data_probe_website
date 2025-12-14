/**
 * TASK-007: Download utility functions
 * PRD Reference: docs/prd/macos-dmg-download-prd.md
 * 
 * Handles file downloads from the backend API with proper error handling.
 */

/**
 * Download a file from the API endpoint
 * @param platform - Platform name ('macos' | 'windows' | 'linux')
 * @param version - Optional version string (defaults to 'latest')
 * @returns Promise that resolves when download starts
 * @throws Error if download fails
 */
export async function downloadFile(
  platform: 'macos' | 'windows' | 'linux',
  version?: string
): Promise<void> {
  try {
    // Construct API URL
    const apiUrl = getApiUrl();
    const url = new URL(`/api/downloads/${platform}`, apiUrl);
    
    // Add version query parameter if provided
    if (version) {
      url.searchParams.set('version', version);
    }

    // Fetch the file
    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        'Accept': 'application/x-apple-diskimage, application/octet-stream, */*',
      },
      // Enable credentials if needed for CORS
      credentials: 'omit',
    });

    // Handle errors
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      const errorMessage = errorData?.error?.message || `Download failed: ${response.statusText}`;
      throw new Error(errorMessage);
    }

    // Get filename from Content-Disposition header
    const contentDisposition = response.headers.get('Content-Disposition');
    let filename = `DataProbe-0.1.0.dmg`; // Default fallback
    
    if (contentDisposition) {
      // Try multiple patterns to extract filename
      // Pattern 1: filename="DataProbe-0.1.0.dmg" (with quotes)
      let filenameMatch = contentDisposition.match(/filename="([^"]+)"/);
      if (filenameMatch && filenameMatch[1]) {
        filename = filenameMatch[1];
      } else {
        // Pattern 2: filename=DataProbe-0.1.0.dmg (without quotes)
        filenameMatch = contentDisposition.match(/filename=([^;]+)/);
        if (filenameMatch && filenameMatch[1]) {
          filename = filenameMatch[1].trim();
        }
      }
    }
    
    // Log for debugging
    if (import.meta.env.DEV) {
      console.log('Download filename:', filename);
      console.log('Content-Disposition:', contentDisposition);
    }

    // Create blob from response
    const blob = await response.blob();

    // Create download link and trigger download
    const downloadUrl = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();

    // Cleanup
    document.body.removeChild(link);
    window.URL.revokeObjectURL(downloadUrl);
  } catch (error) {
    // Re-throw with more context
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Failed to download file: Unknown error');
  }
}

/**
 * Get the API base URL from environment variables
 * @returns API base URL
 */
function getApiUrl(): string {
  // Always use VITE_API_URL if provided (required in production, recommended in development)
  const apiUrl = import.meta.env.VITE_API_URL;
  
  if (apiUrl) {
    return apiUrl;
  }
  
  // Fallback: In production, use same origin (backend and frontend on same domain)
  if (!import.meta.env.DEV) {
    return window.location.origin;
  }
  
  // Development fallback: construct from backend URL env vars
  const backendHost = import.meta.env.VITE_BACKEND_HOST || 'localhost';
  const backendPort = import.meta.env.VITE_BACKEND_PORT || '3001';
  const backendProtocol = import.meta.env.VITE_BACKEND_PROTOCOL || 'http';
  
  return `${backendProtocol}://${backendHost}:${backendPort}`;
}

