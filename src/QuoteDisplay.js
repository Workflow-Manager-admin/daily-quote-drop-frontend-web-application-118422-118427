import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

// PUBLIC_INTERFACE
const QuoteDisplay = () => {
  // Sample quotes array - can be expanded or moved to a separate file
  const quotes = [
    { text: 'Be the change you wish to see in the world.', author: 'Mahatma Gandhi' },
    { text: 'The only way to do great work is to love what you do.', author: 'Steve Jobs' },
    { text: 'In the middle of difficulty lies opportunity.', author: 'Albert Einstein' },
    { text: 'Success is not final, failure is not fatal: it is the courage to continue that counts.', author: 'Winston Churchill' },
    { text: 'The future belongs to those who believe in the beauty of their dreams.', author: 'Eleanor Roosevelt' }
  ];

  // Get a random quote from the array
  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  };

  const quote = getRandomQuote();

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      padding={2}
    >
      <Card
        sx={{
          maxWidth: 600,
          width: '100%',
          backgroundColor: '#f5f5f5',
          boxShadow: 3,
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            gutterBottom
            sx={{ fontStyle: 'italic' }}
          >
            "{quote.text}"
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            sx={{ textAlign: 'right', marginTop: 2 }}
          >
            - {quote.author}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default QuoteDisplay;
