import styled from "styled-components";

const Conteiner = styled.div`
  background-color: grey;
  width: 300px;
  height: 500px;
  margin: auto;
  margin-top: 120px;
`;

export default function Form() {
  return (
    <Conteiner>
      <form>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" name="email" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" />
        </div>

        <button type="submit">Submit</button>
      </form>
    </Conteiner>
  );
}
