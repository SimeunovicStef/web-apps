import React from 'react'

const ActionButton = (props) => {
    const bla = (event) => {
        props.onSearch(event.target.value)
    }

    return (

        <div className="col s12 m4">
            <span class="material-icons magni">search</span>
            <input type="text" className="searchinp" placeholder="Search users" onChange={event => props.onSearch(event.target.value)} /><br />
            <span onClick={props.changeLayout}><i className="material-icons view">{props.isGrid ? 'view_list' : 'view_module'}</i></span>
            <i onClick={props.loadUsers} className="material-icons refresh">refresh</i>
        </div>

    )
}
export default ActionButton
