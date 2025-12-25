/**
 * TASK-007: Download utility functions
 * PRD Reference: docs/prd/macos-dmg-download-prd.md
 * 
 * Handles file downloads from the backend API with proper error handling.
 */

/**
 * Download URLs for different platforms and architectures
 * Files are served from GitHub Releases
 */
const DOWNLOAD_URLS = {
  macos: {
    'apple-silicon': 'https://github.com/andrewtran1415/data_probe_website/releases/latest/download/DataProbe-apple-silicon.dmg',
    'intel': 'https://github.com/andrewtran1415/data_probe_website/releases/latest/download/DataProbe-intel.dmg',
  },
  windows: 'https://github.com/andrewtran1415/data_probe_website/releases/latest/download/DataProbe-setup.exe',
  linux: 'https://github.com/andrewtran1415/data_probe_website/releases/latest/download/DataProbe-linux.AppImage',
};

/**
 * Download a file from a direct URL
 * @param platform - Platform name ('macos' | 'windows' | 'linux')
 * @param version - Optional version string (not used with direct URLs)
 * @param architecture - Optional architecture ('intel' | 'apple-silicon' for macOS)
 * @returns Promise that resolves when download starts
 * @throws Error if download fails
 */
export async function downloadFile(
  platform: 'macos' | 'windows' | 'linux',
  version?: string,
  architecture?: 'intel' | 'apple-silicon'
): Promise<void> {
  try {
    // Get the download URL
    let downloadUrl: string;

    if (platform === 'macos' && architecture) {
      downloadUrl = DOWNLOAD_URLS.macos[architecture];
    } else if (platform === 'macos') {
      // Default to Apple Silicon for macOS
      downloadUrl = DOWNLOAD_URLS.macos['apple-silicon'];
    } else {
      downloadUrl = DOWNLOAD_URLS[platform];
    }

    // Trigger download by opening URL in new tab
    // This works for direct file URLs (GitHub releases, CDN, etc.)
    window.open(downloadUrl, '_blank');

  } catch (error) {
    // Re-throw with more context
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Failed to download file: Unknown error');
  }
}


