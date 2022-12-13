import React, { useState, useEffect, useCallback } from 'react';
import { Container } from '@mui/material';
import axios from 'axios';

import TextTranslator from '../../components/TextTranslator';

export default function Yodaspeak() {

  const translate = async (text, callback) => {
    const { data } = await axios.get('/api/translators/yodaspeak', {
      params: { text }
    });

    console.log(data);

    callback('go to the dagobah system you must');
  }

  return (
    <Container maxWidth='md'>
      <TextTranslator
        title='Yodaspeak Generator'
        description='Enter text you must in the field below to translate it.'
        placeholder='Hmm...'
        translate={translate}
      />
    </Container>
  );
}
