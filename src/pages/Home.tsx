import { useState, useEffect, useRef } from "react";
import TextInput from "../components/atoms/TextInput/TextInput";
import useDebounce from "../core/hooks/useDebounce";
import { highlightText } from "../components/atoms/HighLightText/HighLightText";
import Button from "../components/atoms/Button/Button";

const Home = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const debouncedSearchTerm = useDebounce(searchTerm, 500);
    const [matchIndexes, setMatchIndexes] = useState<number[]>([]);
    const [currentMatch, setCurrentMatch] = useState(0);
    const contentRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const textContent = `Atoms are the basic particles of the chemical elements. An atom consists of a nucleus of protons and generally neutrons, surrounded by an electromagnetically bound swarm of electrons. The chemical elements are distinguished from each other by the number of protons that are in their atoms. For example, any atom that contains 11 protons is sodium, and any atom that contains 29 protons is copper. Atoms with the same number of protons but a different number of neutrons are called isotopes of the same element.Atoms are the basic particles of the chemical elements. An atom consists of a nucleus of protons and generally neutrons, surrounded by an electromagnetically bound swarm of electrons. The chemical elements are distinguished from each other by the number of protons that are in their atoms. For example, any atom that contains 11 protons is sodium, and any atom that contains 29 protons is copper. Atoms with the same number of protons but a different number of neutrons are called isotopes of the same element.Atoms are the basic particles of the chemical elements. An atom consists of a nucleus of protons and generally neutrons, surrounded by an electromagnetically bound swarm of electrons. The chemical elements are distinguished from each other by the number of protons that are in their atoms. For example, any atom that contains 11 protons is sodium, and any atom that contains 29 protons is copper. Atoms with the same number of protons but a different number of neutrons are called isotopes of the same element.Atoms are the basic particles of the chemical elements. An atom consists of a nucleus of protons and generally neutrons, surrounded by an electromagnetically bound swarm of electrons. The chemical elements are distinguished from each other by the number of protons that are in their atoms. For example, any atom that contains 11 protons is sodium, and any atom that contains 29 protons is copper. Atoms with the same number of protons but a different number of neutrons are called isotopes of the same element.Atoms are the basic particles of the chemical elements. An atom consists of a nucleus of protons and generally neutrons, surrounded by an electromagnetically bound swarm of electrons. The chemical elements are distinguished from each other by the number of protons that are in their atoms. For example, any atom that contains 11 protons is sodium, and any atom that contains 29 protons is copper. Atoms with the same number of protons but a different number of neutrons are called isotopes of the same element.Atoms are the basic particles of the chemical elements. An atom consists of a nucleus of protons and generally neutrons, surrounded by an electromagnetically bound swarm of electrons. The chemical elements are distinguished from each other by the number of protons that are in their atoms. For example, any atom that contains 11 protons is sodium, and any atom that contains 29 protons is copper. Atoms with the same number of protons but a different number of neutrons are called isotopes of the same element.Atoms are the basic particles of the chemical elements. An atom consists of a nucleus of protons and generally neutrons, surrounded by an electromagnetically bound swarm of electrons. The chemical elements are distinguished from each other by the number of protons that are in their atoms. For example, any atom that contains 11 protons is sodium, and any atom that contains 29 protons is copper. Atoms with the same number of protons but a different number of neutrons are called isotopes of the same element.Atoms are the basic particles of the chemical elements. An atom consists of a nucleus of protons and generally neutrons, surrounded by an electromagnetically bound swarm of electrons. The chemical elements are distinguished from each other by the number of protons that are in their atoms. For example, any atom that contains 11 protons is sodium, and any atom that contains 29 protons is copper. Atoms with the same number of protons but a different number of neutrons are called isotopes of the same element.Atoms are the basic particles of the chemical elements. An atom consists of a nucleus of protons and generally neutrons, surrounded by an electromagnetically bound swarm of electrons. The chemical elements are distinguished from each other by the number of protons that are in their atoms. For example, any atom that contains 11 protons is sodium, and any atom that contains 29 protons is copper. Atoms with the same number of protons but a different number of neutrons are called isotopes of the same element.Atoms are the basic particles of the chemical elements. An atom consists of a nucleus of protons and generally neutrons, surrounded by an electromagnetically bound swarm of electrons. The chemical elements are distinguished from each other by the number of protons that are in their atoms. For example, any atom that contains 11 protons is sodium, and any atom that contains 29 protons is copper. Atoms with the same number of protons but a different number of neutrons are called isotopes of the same element.Atoms are the basic particles of the chemical elements. An atom consists of a nucleus of protons and generally neutrons, surrounded by an electromagnetically bound swarm of electrons. The chemical elements are distinguished from each other by the number of protons that are in their atoms. For example, any atom that contains 11 protons is sodium, and any atom that contains 29 protons is copper. Atoms with the same number of protons but a different number of neutrons are called isotopes of the same element.Atoms are the basic particles of the chemical elements. An atom consists of a nucleus of protons and generally neutrons, surrounded by an electromagnetically bound swarm of electrons. The chemical elements are distinguished from each other by the number of protons that are in their atoms. For example, any atom that contains 11 protons is sodium, and any atom that contains 29 protons is copper. Atoms with the same number of protons but a different number of neutrons are called isotopes of the same element.Atoms are the basic particles of the chemical elements. An atom consists of a nucleus of protons and generally neutrons, surrounded by an electromagnetically bound swarm of electrons. The chemical elements are distinguished from each other by the number of protons that are in their atoms. For example, any atom that contains 11 protons is sodium, and any atom that contains 29 protons is copper. Atoms with the same number of protons but a different number of neutrons are called isotopes of the same element.Atoms are the basic particles of the chemical elements. An atom consists of a nucleus of protons and generally neutrons, surrounded by an electromagnetically bound swarm of electrons. The chemical elements are distinguished from each other by the number of protons that are in their atoms. For example, any atom that contains 11 protons is sodium, and any atom that contains 29 protons is copper. Atoms with the same number of protons but a different number of neutrons are called isotopes of the same element.Atoms are the basic particles of the chemical elements. An atom consists of a nucleus of protons and generally neutrons, surrounded by an electromagnetically bound swarm of electrons. The chemical elements are distinguished from each other by the number of protons that are in their atoms. For example, any atom that contains 11 protons is sodium, and any atom that contains 29 protons is copper. Atoms with the same number of protons but a different number of neutrons are called isotopes of the same element.Atoms are the basic particles of the chemical elements. An atom consists of a nucleus of protons and generally neutrons, surrounded by an electromagnetically bound swarm of electrons. The chemical elements are distinguished from each other by the number of protons that are in their atoms. For example, any atom that contains 11 protons is sodium, and any atom that contains 29 protons is copper. Atoms with the same number of protons but a different number of neutrons are called isotopes of the same element.Atoms are the basic particles of the chemical elements. An atom consists of a nucleus of protons and generally neutrons, surrounded by an electromagnetically bound swarm of electrons. The chemical elements are distinguished from each other by the number of protons that are in their atoms. For example, any atom that contains 11 protons is sodium, and any atom that contains 29 protons is copper. Atoms with the same number of protons but a different number of neutrons are called isotopes of the same element.Atoms are the basic particles of the chemical elements. An atom consists of a nucleus of protons and generally neutrons, surrounded by an electromagnetically bound swarm of electrons. The chemical elements are distinguished from each other by the number of protons that are in their atoms. For example, any atom that contains 11 protons is sodium, and any atom that contains 29 protons is copper. Atoms with the same number of protons but a different number of neutrons are called isotopes of the same element.Atoms are the basic particles of the chemical elements. An atom consists of a nucleus of protons and generally neutrons, surrounded by an electromagnetically bound swarm of electrons. The chemical elements are distinguished from each other by the number of protons that are in their atoms. For example, any atom that contains 11 protons is sodium, and any atom that contains 29 protons is copper. Atoms with the same number of protons but a different number of neutrons are called isotopes of the same element.`;

    useEffect(() => {
        if (!debouncedSearchTerm.trim()) {
            setMatchIndexes([]);
            setCurrentMatch(0);
            return;
        }

        const regex = new RegExp(`(${debouncedSearchTerm})`, "gi");
        const matches: number[] = [];
        let match;
        while ((match = regex.exec(textContent)) !== null) {
            matches.push(match.index);
        }
        setMatchIndexes(matches);
        setCurrentMatch(0);
    }, [debouncedSearchTerm]);

    useEffect(() => {
        if (contentRef.current && matchIndexes.length > 0) {
            const spans = contentRef.current.querySelectorAll<HTMLSpanElement>(".highlighted");
            const targetSpan = spans[currentMatch];
            if (targetSpan) {
                targetSpan.scrollIntoView({ behavior: "smooth", block: "center" });
            }
        }
    }, [currentMatch, matchIndexes]);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (matchIndexes.length === 0) return;
        if (event.key === "ArrowDown") {
            event.preventDefault();
            setCurrentMatch((prev) => (prev + 1) % matchIndexes.length);
        } else if (event.key === "ArrowUp") {
            event.preventDefault();
            setCurrentMatch((prev) => (prev - 1 + matchIndexes.length) % matchIndexes.length);
        }
    };

    return (
        <main className="h-100 container">
            <div className="h-100">
                <div className="header">

                    <TextInput
                        ref={inputRef}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Type a keyword ..."
                        className="mb-20"
                    />

                    {debouncedSearchTerm.trim() ? (
                        matchIndexes.length > 0 ? (
                            <>
                                <span>result: {currentMatch + 1} of {matchIndexes.length}</span>
                                <div className="controls">
                                    <Button onClick={() => setCurrentMatch((prev) => (prev - 1 + matchIndexes.length) % matchIndexes.length)}> Prev</Button>
                                    <Button onClick={() => setCurrentMatch((prev) => (prev + 1) % matchIndexes.length)}> Next</Button>
                                </div>
                            </>
                        ) : (
                            <div className="mb-40 empty-state">No results found for <strong>"{debouncedSearchTerm}"</strong>.</div>
                        )
                    ) : ""}
                </div>

                <div ref={contentRef} className="fw-400 text-gray description" >
                    {highlightText(textContent, debouncedSearchTerm, currentMatch)}
                </div>
            </div>
        </main >
    );
};

export default Home;
