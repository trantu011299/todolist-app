import React, {useEffect, useState} from "react";
import FormNewTask from "./FormNewTask";
import {getData, setData} from "../utils/common";

interface Props {
    activeChange: boolean
    setActiveChange: (activeChange: any) => void
}

const ListTask:React.FC<Props> = ({activeChange, setActiveChange}) => {
    const [title, setTitle] = useState<string>('')
    const [dataListTask, setDataListTask] = useState<any[]>([])

    useEffect(() => {
        // @ts-ignore
        setDataListTask(getData())
    },[activeChange])

    const showDetail = (titleActive: string) => {
        if (title !== ""){
            setTitle("")
        }
        if (title === ""){
            setTitle(titleActive)
        }
        if (title !== titleActive){
            setTitle(titleActive)
        }
        setActiveChange(new Date())
    }

    const removeTask = (indexActive: number) => {
        const newListTask = dataListTask.filter((item: any,index: number) => index !== indexActive)

        setDataListTask(newListTask)
        setData(newListTask)

        setActiveChange(new Date())
    }

    const checkTask = (indexTask: number, checkTask: boolean) => {
        const _dataListTask = [...dataListTask]
        _dataListTask[indexTask].checked = !checkTask
        setDataListTask(_dataListTask)
        setData(_dataListTask)
    }

    const removeListTask = () => {
        const newListTask = dataListTask.filter((item: any) => item.checked !== true)

        if (window.confirm("Bạn có chắc chắn muốn xóa task")){
            setDataListTask(newListTask)
            setData(newListTask)

            setActiveChange(new Date())
        }
    }

    const handleSearch = (value: string) => {
        const newListTask = getData().filter((item: any) => item.title.indexOf(value) !== -1)
        setTimeout(() => {
            setDataListTask(newListTask)
        }, 1500)
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
                        onChange={(e: any) => handleSearch(e.target.value)}
                    />
                </div>

                {/*task*/}
                {dataListTask.length > 0 &&
                dataListTask.map((item: any, index: number) => <div key={index} style={{marginBottom: 20}}>
                        <div className={`task ${title !== item.title ? `hide-border` : ""}`}>
                            <div className="task-checkbox">{item.title}
                                <input type="checkbox" checked={item.checked}/>
                                <span onClick={() => checkTask(index, item.checked)} className="checkmark"/>
                            </div>

                            <div className="task-feature">
                                <button
                                    className="button button-detail"
                                    style={{marginRight: 20}}
                                    onClick={() => showDetail(item.title)}>
                                    Detail
                                </button>
                                <button className="button button-remove" onClick={() => removeTask(index)}>
                                    Remove
                                </button>
                            </div>
                        </div>

                        <div className={`task-detail ${title === item.title ? `hide` : ""}`}>
                            <FormNewTask
                                type={"update"}
                                activeChange={activeChange}
                                dataTask={item}
                                indexNumber={index}
                                setActiveChange={setActiveChange}
                                setTitle={setTitle}
                            />
                        </div>
                    </div>)
                }

            </div>

            {/*bulk action*/}
            <div className={`task task-bulk-action`}>
                <span>
                    Bulk Action:
                </span>

                <div className="task-feature">
                    <button
                        className="button button-done"
                        style={{marginRight: 20}}>
                        Done
                    </button>
                    <button className="button button-remove" onClick={() => removeListTask()}>
                        Remove
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ListTask