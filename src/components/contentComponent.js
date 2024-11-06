import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataPokemon } from "../store/actions/dataPokemon.action";
import { Container, Row, Col, Alert, Card } from "react-bootstrap";

export const PokemonList = () => {
  const dispatch = useDispatch();
  const datas = useSelector((state) => state.dataPokemonReducer.PokemonList);
  const error = useSelector((state) => state.dataPokemonReducer.error);
  useEffect(() => {
    dispatch(fetchDataPokemon());
  }, [dispatch]);

  return (
    <div className="mt-2">
      <Container fluid>
        <h2>Pokemon List</h2>
        {error && (
          <Alert variant="success">
            <Alert.Heading>Data Not Found</Alert.Heading>
            <p>Error: {error}</p>
          </Alert>
        )}

        <Row>
          {datas.map((pokemon, index) => (
            <Col sm={2} key={index} className="g-4 text-center">
              <Card className="h-100 shadow">
                <Card.Img
                  variant="top"
                  src={pokemon.imageUrl}
                  alt={pokemon.name}
                />
                <Card.Body>
                  <Card.Title>
                    <strong>{pokemon.name}</strong>
                  </Card.Title>
                  <Card.Text>
                    <strong>Abiliti: {pokemon.abilities.join(", ")}</strong>{" "}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
