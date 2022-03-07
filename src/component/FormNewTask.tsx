import React, {useState} from "react";
import moment from "moment";

interface Props {
    type: string
}

const FormNewTask:React.FC<Props> = ({type}) => {
    const [task, setTask] = useState<{
        title: string
        description: string
        douDate: any
        piority: string
    }>({
        title: "",
        description: "",
        douDate: moment().format("YYYY-MM-DD"),
        piority: "normal"
    })

    const onChangeValue = (field: string, value: string) => {
        setTask(prevState => ({...prevState, [field]: value}))
    }

    const submitForm = () => {
        if (![task.title, task.description, task.piority].includes("")){
            setTask(prevState => (
                {...prevState, title: "", description: "",
                    douDate: moment().format("YYYY-MM-DD")
                }))
        }
    }

    return (
        <div className={`app-left ${type === "add" ? "borderRight" : ""}`}>
            {type === "add" && <p className="title-big">New Task</p>}
            <form>
                <div>
                    <input
                        className="title-input"
                        placeholder="Add new task..."
                        type="text"
                        value={task.title}
                        onChange={(value: any) => onChangeValue("title", value.target.value)}
                    />
                </div>

                <label htmlFor="description">Description</label>
                <textarea
                    id="description"
                    style={{width: "100%", padding: "10px", boxSizing: "border-box"}}
                    rows={8}
                    value={task.description}
                    onChange={(value: any) => onChangeValue("description", value.target.value)}
                />

                <div style={{display: "flex", flexShrink: 0}}>
                    <div style={{flexBasis: "50%", marginRight: 20}}>
                        <label htmlFor="dou">Dou Date</label>
                        <input
                            type="date" id="dou"
                            value={task.douDate}
                            style={{width: "100%", height: 30}}
                            defaultValue={moment().format("YYYY-MM-DD")}
                            onChange={(value: any) => onChangeValue("douDate", value.target.value)}
                            min={moment().format("YYYY-MM-DD")}
                            placeholder={moment().format("YYYY-MM-DD")}
                        />
                    </div>

                    <div style={{flexBasis: "50%", marginLeft: 20}}>
                        <label htmlFor="piority">Piority</label>
                        <select
                            style={{width: "100%", height: 34}}
                            id="piority"
                            defaultValue="normal"
                            onChange={(value: any) => onChangeValue("piority", value.target.value)}
                        >
                            <option value="low">Low</option>
                            <option value="normal">Normal</option>
                            <option value="high">High</option>
                        </select>
                    </div>
                </div>
            </form>

            <div className="dFlex-center" style={{width: "100%", marginTop: type === "add" ? 70 : 20}}>
                <button className="button button-add" onClick={() => submitForm()}>
                    {type === "add" ? "Add" : "Update"}
                </button>
            </div>
        </div>
    )
}

export default FormNewTask