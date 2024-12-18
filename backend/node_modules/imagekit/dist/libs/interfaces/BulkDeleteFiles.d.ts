/**
 * Response when deleting multiple files from the media library.
 *
 * @see {@link https://docs.imagekit.io/api-reference/media-api/delete-files-bulk}
 */
export interface BulkDeleteFilesResponse {
    /**
     * List of file ids of successfully deleted files
     */
    successfullyDeletedFileIds: string[];
}
export interface BulkDeleteFilesError extends Error {
    help: string;
    missingFileIds: string[];
}
