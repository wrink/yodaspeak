import React, { useState } from 'react';
import { Button, Typography, Box, TextField } from '@mui/material';

import styles from './TextTranslator.module.scss';

export default function TextTranslator({ title, description, placeholder, translate }) {
  const [ text, setText ] = useState('');
  const [ translatedText, setTranslatedText ] = useState('');

  const handleSubmit = () => {
    translate(text, (result) => {
      setTranslatedText(result);
    })
  }

  return (
    <Box my={4} className={styles.textTranslator}>
      <Typography variant='h2' gutterBottom className={styles.title}>
        {title}
      </Typography>
      <Typography variant='body' component='p' className={styles.description}>
        {description}
      </Typography>

      {translatedText && (
        <Box elevation='3' className={styles.translated}>
          <Typography variant='h5' className={styles.translatedText}>
            {translatedText}
          </Typography>
        </Box>
      )}

      <Box className={styles.translateForm}>
        <TextField
          placeholder={placeholder}
          variant='outlined'
          className={styles.textField}
          onChange={(e) => setText(e.target.value)}
        />
        <Button type='button' variant='contained' onClick={handleSubmit} className={styles.translateButton}>
          Translate
        </Button>
      </Box>
    </Box>
  );
}
