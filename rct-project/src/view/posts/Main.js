import React from 'react'
import Post from '../components/PostsPage'


class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }

        setTimeout(() => {
            this.setState({
                posts: Post
            });
        }, 3000)
    }

    render() {
        if (!this.state.posts.length) {
            return <h2>Loading Page...</h2>
        }
        return (
            <main className='main'>
                <ul>
                    {/* {this.state.posts.map(e => <div>{e.title}</div>)} */}
                    {this.state.posts.map(e => <li><h1>{e.title}</h1><p>{e.body}</p></li>)}
                </ul>
            </main>
        )
    }
}

export default Main