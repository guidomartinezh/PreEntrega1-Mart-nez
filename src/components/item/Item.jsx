import {
  Card,
  Stack,
  Heading,
  Divider,
  ButtonGroup,
  Button,
  CardBody,
  Image,
  Text,
  CardFooter,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

import { Box, Flex } from "@chakra-ui/react";

export default function Item({ product }) {
  return (
    <Flex justifyContent="center" alignItems="center">
      <Box border="1px" borderColor="gray.200">
        <Card maxW="sm">
          <CardBody>
            <Image
              src={`../img/${product.img}`}
              alt={product.title}
              borderRadius="lg"
            />
            <Stack mt="6">
              <Heading>{product.title}</Heading>
              <Text>{product.description}</Text>
              <Text color="orange.600" fontSize="2xl">
                {`Price: $${product.price}`}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Link to={`/product/${product.id}`}>
                <Button variant="solid" colorScheme="orange">
                  See Product
                </Button>
              </Link>
              <Link to={"/cart"}>
                <Button variant="ghost" colorScheme="orange">
                  Add to cart
                </Button>
              </Link>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </Box>
    </Flex>
  );
}

/*

  return (
    <Col xs={10} sm={10} md={6} lg={6} xl={6}>
      <Card className="text-center mb-3">
        <Card.Img
          variant="top"
          src={`../img/${product.img}`}
          alt={`Imagen de ${product.title}`}
        />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text>{`Stock: ${product.stock}`}</Card.Text>
          <Card.Text>{`Price: $${product.price}`}</Card.Text>
          <Button variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

*/
