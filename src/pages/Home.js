import './HomeStyles.css'

function Home()
{
    window.onload = ()=>
    {
        const bt1 =  document.getElementById("bt1");
        bt1.onclick = ()=>    
            {
                alert("working");
            }
}
    function handleSubmit()
    {
        alert("YES!");
    }
    return(
        <div className="main">

            <h1 class="selectorHeading">Find your vehicle now!</h1>

            <form onSubmit={handleSubmit}>


                <div className="userInput">
                    
                    <div className="Box">
                        <text>Pick-Up</text><br/>
                        <input type="date" name="pickDate" className="Date" />
                    </div>

                    <div className="Box">
                        <text>Drop-Off</text><br/>
                        <input type="date" name="pickDate" className="Date" />
                    </div>
                     
                    <div className='Box'>
                        <text>Vehicle Type</text><br/>
                        <select name="vehicleType" className="vehicleType">
                            <option id="selectVal" Value="">Vehicle Type</option>
                            <option id="selectVal" Value="car">Car</option>
                            <option id="selectVal" Value="bike">Bike</option>
                            <option id="selectVal" Value="scooter">Scooter</option>

                        </select>
                    </div>  

                </div>
                
                <div className="Box1">
                    <button id="bt1" to="/t" type='submit'>Check Availability</button>
                </div>
                
            </form>
            
        </div>
    )
}

export default Home;