import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownViewerProps {
    content: string;
}

const MarkdownViewer: React.FC<MarkdownViewerProps> = ({ content }) => {
    return (
        <div className="markdown-container">
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                    table: ({ node, ...props }) => (
                        <div className="table-container">
                            <table className="hanzi-table" {...props} />
                        </div>
                    ),
                    td: ({ node, children, ...props }) => {
                        const text = React.Children.toArray(children).join('');
                        const isChineseCell = /[\u4e00-\u9fff]/.test(text) &&
                            text.length <= 3; // Предполагаем, что иероглифы короткие

                        return (
                            <td
                                className={isChineseCell ? 'hanzi-cell' : ''}
                                {...props}
                            >
                                {children}
                            </td>
                        );
                    },
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    );
};

export default MarkdownViewer;
