import { categories } from "../Categories";
// import { Link } from "react-router-dom";

export const Home = () => {

    const selectHandler = (event) => {
        console.log(event.target.value)

    }

    return <div>
        <select onChange={selectHandler}>
            {categories.map(category =>
            (
                <option key={category.id} value={category.id}>
                    {category.type}
                </option>
            )
            )
            }

        </select>
    </div>;
};
