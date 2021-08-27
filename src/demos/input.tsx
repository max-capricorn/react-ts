import React, { ChangeEvent } from "react"
import { useState } from "react"

const fancyComponent = (value: any, handleChange: (arg0: any, arg1: string) => void, idx: number) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    handleChange(idx, e.target.value)
  }

  return (<input defaultValue={value} onChange={(e) => onChange(e)} />)
}

export default () => {
  const [list, setList] = useState<string[]>([])

  const handleAdd = () => {
    list.push(`infermation ${list.length + 1}`)
    setList([...list])
  }

  const handleChange = (idx: number, value: string) => {
    list[idx] = value;
    setList([...list])
  }

  const handleDelete = (idx: number) => {
    list.splice(idx, 1)
    setList([...list])
  }
  return (
    <>
      {list.map((v, i) => (
        <div key={v}>
          {fancyComponent(v, handleChange, i)}
          <button onClick={() => handleDelete(i)}>删除</button>
        </div>
      ))}
      <button onClick={() => handleAdd()}>添加</button>
    </>
  )
}


