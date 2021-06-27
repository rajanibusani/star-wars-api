import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import "font-awesome/css/font-awesome.min.css";
import PaginationBar from "./PaginationBar.js";
import LoadingSpinner from "./LoadingSpinner";

function CharacterTable() {
    const [people, setPeople] = useState([]);
    const [currentPage, setCurrentPage] = useState("");
    const [loading, setLoading] = useState(false);

    const loadCharacters = async (pageNumber) => {
        setLoading(true)
        let characters = [];
        // getting characters from api
        const charactersResponse = await axios.get(
            `https://swapi.dev/api/people/?page=${pageNumber}`
        );

        for (const character of charactersResponse.data.results) {
            if (!character.species[0]) {
                character.species = { name: "Human" };
            } else {
                // getting characters species, and homeworld information
                const speciesResponse = await axios.get(character.species);
                character.species = speciesResponse.data;
            }
            const homeWorldResponse = await axios.get(character.homeworld);
            character.homeworld = homeWorldResponse.data;
            characters.push(character);
        }
        setPeople(characters)
        setLoading(false)
    };

    useEffect(() => {
        loadCharacters(currentPage)
    }, [currentPage])


    const updatePage = async (e) => {
        const pageNo = e.target.textContent
        setCurrentPage(pageNo)
    };
    // sorting by Name before Maping
    const charactersSoretedByName = people && people.sort(function (a, b) {
        var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
        if (nameA < nameB) //sort string ascending
            return -1;
        if (nameA > nameB)
            return 1;
        return 0; //default return value (no sorting)
    });

    const rows = charactersSoretedByName.map((character, index) => (
        < tr key={index} >
            <td>
                {/* passing character detailes through router */}
                <Link to={{
                    pathname: `/${character.name}`,
                    state: {
                        character: character,
                    }
                }} > {character.name}
                </Link>
            </td>
            < td > {character.birth_year}</td >
            < td > {character.height}</td >
            < td > {character.mass}</td >
            < td > {character.homeworld.name}</td >
            <td>{character.species.name}</td>
        </tr >
    ));

    return (
        <Container>
            <Table responsive className="mt-4 table">
                <thead>
                    <tr className="title-row">
                        <th>Name</th>
                        <th>Birth Date</th>
                        <th>Height</th>
                        <th>Mass</th>
                        <th>Home World</th>
                        <th>Species</th>
                    </tr>
                </thead>
                <tbody>{loading ? <LoadingSpinner /> : rows}</tbody>
            </Table>
            <PaginationBar updatePage={updatePage} />
        </Container>
    );

}
export default CharacterTable;
