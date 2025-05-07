'use client';

import React from 'react';
import { TextField, Box, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

export default function SearchBar({ onSearch, selectedCategory, onClearCategory }) {
  const placeholder = selectedCategory 
    ? `Zoeken binnen ${selectedCategory}...`
    : "Zoek alle activiteiten...";

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column',
        width: '100%',
        gap: 1
      }}
    >
      <TextField
        fullWidth
        variant="outlined"
        placeholder={placeholder}
        onChange={(e) => onSearch(e.target.value)}
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: '30px',
            backgroundColor: 'background.paper',
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'primary.main',
            },
          },
        }}
        InputProps={{
          startAdornment: <SearchIcon sx={{ color: 'action.active', mr: 1 }} />,
        }}
      />
      {selectedCategory && (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            variant="outlined"
            onClick={onClearCategory}
            startIcon={<ClearIcon />}
            sx={{
              borderRadius: '30px',
              textTransform: 'none',
              whiteSpace: 'nowrap',
              minWidth: 'auto'
            }}
          >
            Categorie Wissen
          </Button>
        </Box>
      )}
    </Box>
  );
}