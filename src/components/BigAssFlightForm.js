import React, {Component} from "react"

class BigAssFlightForm extends Component {
    constructor() {
        super();

        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            destination: "sweden",
            dietaryRestrictions: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleDiateryChange = this.handleDiateryChange.bind(this);
    }
    
    handleChange(event) {
        let target = event.target;
        let name = target.name;
        let value = target.value;

        this.setState({
            [name]: value
        });        
    }
    
    handleDiateryChange(event) {
        let target = event.target;
        let name = target.name;
        let checked = target.checked;

        this.setState(prevState => {
            let updatedArray = [...prevState.dietaryRestrictions];
            
            if(updatedArray.includes(name) && !checked) {
                updatedArray = updatedArray.filter(item => (item !== name));
            } else {
                updatedArray.push(name);
            }
            
            return { dietaryRestrictions: updatedArray };
        });
    }
    
    render() {
        return (
            <main>
                <form>
                    <input
                        name="firstName"
                        type="text"
                        value={this.state.firstName}
                        onChange={this.handleChange} 
                        placeholder="First Name" /><br />
                    <input
                        name="lastName"
                        type="text"
                        value={this.state.lastName}
                        onChange={this.handleChange} 
                        placeholder="Last Name" /><br />
                    <input
                        name="age"
                        type="text"
                        pattern="[\d]*"
                        value={this.state.age}
                        onChange={this.handleChange} 
                        placeholder="Age (in digits)" /><br />
                    <br />
                    <label>
                        <input 
                            type="radio"
                            name="gender"
                            value="male"
                            checked={this.state.gender === "male"}
                            onChange={this.handleChange}
                        />
                        Male
                    </label>
                    <br />
                    <label>
                        <input 
                            type="radio"
                            name="gender"
                            value="woman"
                            checked={this.state.gender === "woman"}
                            onChange={this.handleChange}
                        />
                        Woman
                    </label>
                    <br />
                    <label>
                        <input 
                            type="radio"
                            name="gender"
                            value="uncertain"
                            checked={this.state.gender === "uncertain"}
                            onChange={this.handleChange}
                        />
                        Uncertain
                    </label>
                    <br />
                    
                    <select
                        name="destination"
                        value={this.state.destination}
                        onChange={this.handleChange}
                    >
                        <option value="tailand">Tailand</option>
                        <option value="greek">Greek</option>
                        <option value="italy">Italy</option>
                        <option value="france">France</option>
                        <option value="bulgaria">Bulgaria</option>
                        <option value="sweden">Sweden</option>
                    </select>
                    <br />
                    {/* Add checkboxes for diatery restrictions */}
                    <div>
                        <label>
                            <input 
                                name="gluten intolerant"
                                type="checkbox"
                                checked={this.state.dietaryRestrictions.includes("gluten intolerant")}
                                onChange={this.handleDiateryChange}
                            /> Gluten intolerant
                        </label>
                        <label>
                            <input 
                                name="hates chili"
                                type="checkbox"
                                checked={this.state.dietaryRestrictions.includes("hates chili")}
                                onChange={this.handleDiateryChange}
                            /> Hates chili
                        </label>
                        <label>
                            <input 
                                name="can't eat bad tasting foods"
                                type="checkbox"
                                checked={this.state.dietaryRestrictions.includes("can't eat bad tasting foods")}
                                onChange={this.handleDiateryChange}
                            /> can't eat bad tasting foods
                        </label>
                    </div>
                    <br />
                    
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.destination}</p>
                <p>
                    Your dietary restrictions:  
                    {this.state.dietaryRestrictions.map(item => (" " + item + ","))}
                </p>
            </main>
        )
    }
}

export default BigAssFlightForm;
