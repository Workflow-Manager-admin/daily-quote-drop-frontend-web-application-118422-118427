import React, { useState, useEffect } from 'react';
import { Box, Typography, Paper, Button, Fade } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';

// PUBLIC_INTERFACE
const QuoteDisplay = () => {
  // Collection of inspirational quotes
  const quotes = [
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs"
    },
    {
      text: "Life is what happens when you're busy making other plans.",
      author: "John Lennon"
    },
    {
      text: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt"
    },
    {
      text: "In the middle of difficulty lies opportunity.",
      author: "Albert Einstein"
    },
    {
      text: "It does not matter how slowly you go as long as you do not stop.",
      author: "Confucius"
    },
    {
      text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill"
    },
    {
      text: "The best time to plant a tree was 20 years ago. The second best time is now.",
      author: "Chinese Proverb"
    },
    {
      text: "Your time is limited, don't waste it living someone else's life.",
      author: "Steve Jobs"
    },
    {
      text: "The only limit to our realization of tomorrow will be our doubts of today.",
      author: "Franklin D. Roosevelt"
    },
    {
      text: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt"
    }
  ];

  const [currentQuote, setCurrentQuote] = useState(null);
  const [fadeIn, setFadeIn] = useState(true);

  /**
   * Selects a random quote from the quotes array
   */
  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  };

  /**
   * Handles refreshing the quote with animation
   */
  const handleRefreshQuote = () => {
    setFadeIn(false);
    
    // Wait for fade out animation to complete before changing quote
    setTimeout(() => {
      setCurrentQuote(getRandomQuote());
      setFadeIn(true);
    }, 500); // Match the duration of the fade animation
  };

  // Select a random quote when the component mounts
  useEffect(() => {
    setCurrentQuote(getRandomQuote());
  }, []);

  if (!currentQuote) return null; // Don't render until we have a quote

  return (
    <Fade in={fadeIn} timeout={500}>
      <Paper 
        elevation={3}
        sx={{
          p: 4,
          borderRadius: 2,
          backgroundColor: 'rgba(40, 40, 40, 0.8)',
          backdropFilter: 'blur(10px)',
          maxWidth: '800px',
          width: '100%',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '"\201C"', // Opening quotation mark
            position: 'absolute',
            top: '-20px',
            left: '20px',
            fontSize: '150px',
            color: 'rgba(232, 122, 65, 0.1)', // Kavia orange with opacity
            fontFamily: 'Georgia, serif',
            zIndex: 0
          }
        }}
      >
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Typography 
            variant="h4" 
            component="blockquote" 
            sx={{ 
              mb: 2, 
              fontWeight: 400,
              fontStyle: 'italic',
              lineHeight: 1.4
            }}
            className="quote-text"
          >
            {currentQuote.text}
          </Typography>
          
          <Typography 
            variant="subtitle1" 
            component="cite"
            sx={{ 
              display: 'block',
              textAlign: 'right',
              fontWeight: 500,
              color: '#E87A41', // Kavia orange
              mt: 2
            }}
            className="quote-author"
          >
            — {currentQuote.author}
          </Typography>
          
          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<RefreshIcon />}
              onClick={handleRefreshQuote}
              sx={{ mt: 2 }}
              className="refresh-button"
            >
              New Quote
            </Button>
          </Box>
        </Box>
      </Paper>
    </Fade>
  );
};

export default QuoteDisplay;
