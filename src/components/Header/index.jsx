import { Container } from "./styles"
import { FaPlus} from "react-icons/fa";

export const Header = ({ openModal }) => {
    return(
        <Container>
            <header>
                <nav>
                        <button
                        type="button"
                        onClick={() => {
                        openModal();
                        }}
                        >
                         <FaPlus />
                        <p>Novo Prato</p>
                        </button>
                </nav>
            </header>
        </Container>
    );
};