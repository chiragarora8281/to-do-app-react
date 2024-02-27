

const Form = ({course,trainer,handleChange,handleSubmit}) => {
  return (
    <div className="form">
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="course">course</label>
                <input type="text" placeholder="enter course" name="course" required value={course} onChange={handleChange}/>
                
            </div>
            <div className="form-group">
                <label htmlFor="trainer">trainer</label>
                <input type="text" placeholder="enter trainer" name="trainer" required value={trainer} onChange={handleChange} />
                
            </div>
            <button>submit</button>
        </form>
    </div>
  )
}

export default Form