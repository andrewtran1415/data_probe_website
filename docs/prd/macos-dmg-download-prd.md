# PRD: macOS DMG Download Feature

## Problem Statement

Currently, the DataProbe website frontend displays a "Download for macOS" button in the Hero section, but clicking it doesn't trigger any download functionality. Users expect to be able to download the macOS DMG installer file when clicking this button, but there's no backend service to handle the file download request.

## Goals

1. Enable users to download the macOS DMG installer file from the website
2. Provide a secure, scalable backend API endpoint for file downloads
3. Track download metrics (optional, for future analytics)
4. Ensure proper error handling and user feedback
5. Support future expansion for Windows and other platform downloads

## User Stories

1. **As a macOS user**, I want to click the "Download for macOS" button and receive the DMG installer file, so I can install DataProbe on my Mac.

2. **As a website visitor**, I want clear feedback if the download fails, so I understand what went wrong.

3. **As a developer**, I want a maintainable API structure, so I can easily add downloads for other platforms in the future.

## Requirements

### Functional Requirements

1. **API Endpoint**
   - Create a GET endpoint `/api/downloads/macos` that serves the DMG file
   - Support optional query parameters for version tracking (e.g., `?version=1.0.0`)
   - Return appropriate HTTP status codes (200, 404, 500)

2. **File Handling**
   - Store DMG files in a secure, accessible location (file system or cloud storage)
   - Support serving files from local filesystem initially
   - File should be served with correct MIME type (`application/x-apple-diskimage`)
   - Set appropriate headers for file download (Content-Disposition)

3. **Security**
   - Validate file existence before serving
   - Prevent directory traversal attacks
   - Consider rate limiting for download endpoints
   - Log download attempts for security monitoring

4. **Error Handling**
   - Return 404 if file doesn't exist
   - Return 500 for server errors with appropriate error messages
   - Provide user-friendly error responses

5. **Frontend Integration**
   - Update Hero component to call the download API
   - Show loading state during download
   - Handle errors gracefully with user feedback

### Non-Functional Requirements

1. **Performance**
   - Support concurrent downloads
   - Efficient file streaming for large DMG files
   - Minimal server overhead

2. **Scalability**
   - Architecture should support future cloud storage (S3, GCS, etc.)
   - Easy to add other platform downloads (Windows, Linux)

3. **Maintainability**
   - Follow Next.js/TypeScript best practices
   - Well-documented code
   - Proper error logging

## Technical Approach

### Architecture

1. **Backend Stack**
   - Next.js 14+ (App Router) with TypeScript
   - API Routes in `app/api/downloads/macos/route.ts`
   - File storage: Local filesystem initially (`/public/downloads` or `/storage/downloads`)

2. **Project Structure**
   ```
   backend/
   ├── app/
   │   ├── api/
   │   │   └── downloads/
   │   │       └── macos/
   │   │           └── route.ts
   │   └── ...
   ├── lib/
   │   ├── services/
   │   │   └── download.service.ts
   │   └── utils/
   │       └── file.utils.ts
   ├── middleware/
   │   └── rate-limit.ts (optional)
   └── types/
       └── download.types.ts
   ```

3. **API Response Format**
   - Success: Stream file with proper headers
   - Error: JSON response with error details
   ```json
   {
     "error": {
       "code": "FILE_NOT_FOUND",
       "message": "The requested DMG file is not available",
       "details": {}
     }
   }
   ```

4. **File Storage**
   - Initial: Local filesystem at `backend/storage/downloads/macos/`
   - File naming: `dataprobe-{version}.dmg` or `dataprobe-latest.dmg`
   - Environment variable for storage path: `DOWNLOAD_STORAGE_PATH`

5. **Frontend Changes**
   - Update Hero component button to fetch from API
   - Add download handler with error handling
   - Optional: Show download progress

### Dependencies

- Next.js 14+ (already specified)
- TypeScript
- File system access (Node.js built-in `fs`)
- Optional: `mime-types` package for MIME type detection

### Environment Variables

```env
DOWNLOAD_STORAGE_PATH=/path/to/downloads
NODE_ENV=production|development
```

## Success Criteria

1. ✅ Users can click "Download for macOS" and successfully download the DMG file
2. ✅ API returns 404 with proper error message if file doesn't exist
3. ✅ API returns 500 with proper error message for server errors
4. ✅ File is served with correct MIME type and download headers
5. ✅ Frontend handles download errors gracefully
6. ✅ Code follows backend best practices (validation, error handling, logging)
7. ✅ API is documented and maintainable

## Out of Scope

1. **Authentication/Authorization** - Downloads are public for now
2. **Download Analytics** - Can be added later
3. **Version Management** - Simple file serving, no complex versioning system
4. **Cloud Storage Integration** - Local filesystem only for MVP
5. **Windows/Linux Downloads** - Focus on macOS only for this PRD
6. **Download Progress Tracking** - Basic download only
7. **File Checksums/Verification** - Can be added later

## Open Questions

1. **File Location**: Where will the actual DMG files be stored? (Local server, S3, CDN?)
   - **Decision**: Start with local filesystem, migrate to cloud storage later

2. **Versioning**: How should we handle multiple versions of the DMG?
   - **Decision**: Support `?version=X.Y.Z` query param, default to `latest`

3. **File Size**: What's the expected size of DMG files? (affects streaming strategy)
   - **Assumption**: 50-200MB, use streaming

4. **Rate Limiting**: Should we implement rate limiting for downloads?
   - **Decision**: Basic rate limiting for MVP (e.g., 10 downloads per IP per hour)

5. **Caching**: Should download responses be cached?
   - **Decision**: No caching for MVP, files are relatively static

## Technical Notes

- Use Next.js App Router API routes (not Pages Router)
- Stream large files to avoid loading entire file into memory
- Use `fs.createReadStream()` for efficient file streaming
- Set `Content-Disposition: attachment; filename="dataprobe.dmg"` header
- Consider CORS if frontend and backend are on different domains
- Log all download attempts for security and analytics

## References

- Next.js API Routes: https://nextjs.org/docs/app/building-your-application/routing/route-handlers
- Backend Best Practices: `/Users/quangtran/Documents/projects/data_probe_website/.cursor/rules/backend/backend.mdc`

