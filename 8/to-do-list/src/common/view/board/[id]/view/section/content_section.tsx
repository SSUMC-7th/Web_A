import { Editor } from "react-notion-wysiwyg";

export default function ContentSection({
  content,
  handleContent,
}: ContentSectionProps) {
  return (
    <section className="my-4">
      <Editor
        mode="dark"
        editable={true}
        content={content}
        onUpdate={(editor) => handleContent(editor.getText())}
      />
    </section>
  );
}

interface ContentSectionProps {
  content: string;
  handleContent: (updatedContent: string) => void;
}
