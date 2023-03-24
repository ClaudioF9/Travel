
import SearchBar from "../searchbar/searchbar";
import "./search.css"
import ReturnDate from "../returndate/returndate";
import { DepartureBoard } from "@mui/icons-material";
import DepartureDate from "../departuredate/departuredate";

function Search() {
    return (
        <div className="search">
            <SearchBar />
            <DepartureDate />
            <ReturnDate />
        </div>
    )
}

export default Search;