export function highlightText(
    text: string,
    keyword: string,
    currentMatchIndex: number,
    highlightStyle: React.CSSProperties = {
        backgroundColor: "yellow",
        fontWeight: "bold",
        padding: "2px 4px",
        borderRadius: "4px",
        transition: "background-color 0.5s ease-in-out",
    },
    activeHighlightStyle: React.CSSProperties = {
        backgroundColor: "red",
        color: "white",
        fontWeight: "bold",
        padding: "2px 4px",
        borderRadius: "4px",
        transition: "background-color 0.5s ease-in-out",
    }
): React.ReactNode[] {
    if (!keyword.trim()) return [text];

    const regex = new RegExp(`(${keyword})`, "gi");
    const parts = text.split(regex);

    let highlightCount = -1; // شمارش نتایج پیدا شده

    return parts.map((part, index) => {
        if (regex.test(part)) {
            highlightCount++;
            const style = highlightCount === currentMatchIndex ? activeHighlightStyle : highlightStyle;
            return (
                <span key={index} style={style} className="highlighted">
                    {part}
                </span>
            );
        } else {
            return part;
        }
    });
}