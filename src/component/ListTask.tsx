import React, {useState} from "react";
import FormNewTask from "./FormNewTask";

const ListTask = () => {
    const [search, setSearch] = useState<string>("")
    const [detail, setDetail] = useState<boolean>(false)

    const showDetail = () => {
        setDetail(!detail)
    }

    return(
        <div className="app-right">
            <div>
                <p className="title-big">To Do List</p>

                <div style={{marginBottom: 20}}>
                    <input
                        className="title-input"
                        placeholder="Search..."
                        type="text"
                        value={search}
                        onChange={(value: any) => setSearch(value.target.value)}
                    />
                </div>

                {/*task*/}
                <div style={{marginBottom: 20}}>
                    <div className={`task ${!detail ? `hide-border` : ""}`}>
                        <div className="task-checkbox">One
                            <input type="checkbox"/>
                            <span className="checkmark"/>
                        </div>

                        <div className="task-feature">
                            <button
                                className="button button-detail"
                                style={{marginRight: 20}}
                                onClick={() => showDetail()}>
                                Detail
                            </button>
                            <button className="button button-remove">
                                Remove
                            </button>
                        </div>
                    </div>

                    <div className={`task-detail ${detail ? `hide` : ""}`}>
                        <FormNewTask type={"update"}/>
                    </div>
                </div>

            </div>

            {/*bulk action*/}
            <div className={`task task-bulk-action`} style={{margin: "45px -30px -15px", padding: 30}}>
                <span>
                    Bulk Action:
                </span>

                <div className="task-feature">
                    <button
                        className="button button-done"
                        style={{marginRight: 20}}
                        onClick={() => showDetail()}>
                        Done
                    </button>
                    <button className="button button-remove">
                        Remove
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ListTask