import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Button } from '@mui/material';

const truncateDescription = (description, maxLength) => {
  return description.length > maxLength ? description.substring(0, maxLength) + "..." : description;
};

const CardGpt = ({ product }) => {
  const truncatedDescription = truncateDescription(product.description, 100); // Adjust the maximum length as needed

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={product.image}
          alt={product.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {truncatedDescription}
          </Typography>
          <Typography variant="body1" color="text.primary" mt={1}>
            Price: ${product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Button size="small" color="primary">
        Add to Cart
      </Button>
    </Card>
  );
};

export default CardGpt;
