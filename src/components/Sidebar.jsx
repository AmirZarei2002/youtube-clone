import { Stack } from '@mui/material';

import { categories } from '../utils/constants';

export default function Sidebar({ selectedCategory, setSelectedCategory }) {
    return (
        <Stack
            direction="row"
            sx={{
                overflow: 'auto',
                height: { sx: 'auto', md: '95%' },
                flexDirection: { md: 'column' },
            }}
        >
            {categories.map((category) => (
                <button
                    onClick={() => setSelectedCategory(category.name)}
                    style={{
                        background:
                            category.name === selectedCategory && '#FC1503',
                        color: 'white',
                    }}
                    key={category.name}
                    className="category-btn"
                >
                    <span
                        style={{
                            color:
                                category.name === selectedCategory
                                    ? 'white'
                                    : 'red',
                            marginRight: '15px',
                        }}
                    >
                        {category.icon}
                    </span>
                    <span
                        style={{
                            opacity:
                                category.name === selectedCategory
                                    ? '1'
                                    : '0.8',
                        }}
                    >
                        {category.name}
                    </span>
                </button>
            ))}
        </Stack>
    );
}
