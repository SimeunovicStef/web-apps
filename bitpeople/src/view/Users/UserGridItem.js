import React from 'react'

const GridItem = (props) => {
    if (props.user.gender === "female") {
        return (

            <div className="col s12 m4">
                <div className="card">
                    <div className="card-image">
                        <img src={props.user.picture} />
                        <span className="card-title">{props.user.name}</span>
                    </div>
                    <div className="card-content female">
                        <p><i className="tiny material-icons">email</i> {props.user.getEmail()}</p>
                        <p><i className="tiny material-icons">cake</i> {props.user.getBirthday()}</p>
                    </div>

                </div>
            </div>

        )
    }
    return (
        <div className="col s12 m4">
            <div className="card">
                <div className="card-image">
                    <img src={props.user.picture} />
                    <span className="card-title">{props.user.name}</span>
                </div>
                <div className="card-content">
                    <p><i className="tiny material-icons">email</i> {props.user.getEmail()}</p>
                    <p><i className="tiny material-icons">cake</i> {props.user.getBirthday()}</p>
                </div>

            </div>
        </div>
    )
}
export default GridItem