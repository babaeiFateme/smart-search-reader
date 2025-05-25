import React from "react";

export function highlightText(
    text: string,
    keyword: string,
    highlightStyle: React.CSSProperties = {
        backgroundColor: "yellow",
        fontWeight: "bold",
        transition: "background-color 0.3s",
    }
): React.ReactNode {
    if (!keyword.trim()) return text;

    const regex = new RegExp(`(${keyword})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, index) =>
        regex.test(part) ? (
            <span key={index} style={highlightStyle}>
                {part}
            </span>
        ) : (
            part
        )
    );
}
