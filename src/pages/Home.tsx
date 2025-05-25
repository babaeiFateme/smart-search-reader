import React, { useState } from "react";
import TextInput from "../components/atoms/TextInput/TextInput";
import useDebounce from "../core/hooks/useDebounce";
import { highlightText } from "../components/atoms/HighLightText/HighLightText";

const Home = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    const textContent = `Atoms are the basic particles of the chemical elements. An atom consists of a nucleus of protons and generally neutrons, surrounded by an electromagnetically bound swarm of electrons. The chemical elements are distinguished from each other by the number of protons that are in their atoms. For example, any atom that contains 11 protons is sodium, and any atom that contains 29 protons is copper. Atoms with the same number of protons but a different number of neutrons are called isotopes of the same element.`;



    return (
        <main className="h-100 container">
            <div className="h-100">
                <TextInput
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Type a keyword ..."
                    className="mb-20"
                />

                <div className="fw-400 text-gray description">
                    {highlightText(textContent, debouncedSearchTerm)}
                </div>
            </div>
        </main>
    );
};

export default Home;
