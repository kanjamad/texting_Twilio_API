import React,{Component} from 'react';

class App extends Component {

    state = {text:{recipient:'', textmessage:''}}

    sendText = () => {
        const {text} = this.state;
        fetch(`http://127.0.0.1:4000/send-text?recipient=${text.recipient}&textmessage=${text.textmessage}`)
            .catch(err => console.error(err))

    }

    render(){ 
        const {text} = this.state;
    return(
        <>
                <h2 style={{margin:'30px'}}>Send Text Message</h2>
            <div className="ui form" style={{margin: '20px'}}>  
                <div className="inline fields">
                    <label>To Phone Number</label>
                    <div>
                        <input type="number" placeholder="(xxx)-xxxxxxx" 
                        value={text.recipient} 
                        onChange={e => this.setState({text:{ ...text, recipient:e.target.value}})}
                        />
                    </div >
                </div>
            </div>

            <div div className = "ui form" style= {{margin:'30px'}} >
                <div className="field">
                    <label>Message...</label>
                    <textarea onChange={e=>this.setState({text:{...text, textmessage:e.target.value}})}></textarea>
                </div>
            </div>

            < button className = "massive ui blue button" style={{marginLeft:'40vw'}}  onClick={this.sendText}> Send Message</button>




    </>
    );
    }
};

export default App;