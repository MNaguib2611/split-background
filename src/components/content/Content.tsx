import "./Content.css";

function Content() {
  return (
    <div className="Content">
      <form action="/action_page.php">
        <label htmlFor="fname">First Name</label>
        <input type="text" name="firstname" placeholder="Your name.." />

        <label htmlFor="lname">Last Name</label>
        <input type="text" name="lastname" placeholder="Your last name.." />

        <label htmlFor="country">Country</label>
        <select name="country">
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Content;
