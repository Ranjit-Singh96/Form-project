import React from 'react'

export default function ReadData(props) {
    return (
        <tr key={props.index+1}>
            <td>{props.item.username}</td>
            <td>{props.item.email}</td>
            <td>{props.item.address}</td>
            <td>
                <button type='button' className='btn btn-danger btn-sm' onClick={()=>props.handleEditClick(props.index,props.item)}>Edit</button>
                <button type='button' className='btn btn-danger btn-sm mx-1' onClick={()=>props.handleClickDelete(props.index)}>Delete</button>
            </td>
        </tr>
    )
}
