export type FileItem = {
  id: string;
  name: string;
  folder: "Desktop" | "Downloads";
  type: "md" | "pdf";
  content?: string;
  src?: string;
};

export type MarkdownViewerProps = {
  content: string;
};
