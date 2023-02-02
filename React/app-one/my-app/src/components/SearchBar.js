import React, { useContext, useState } from 'react';
import { 
    Input,
    Button,
    HStack,
    Flex,
    Heading
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons'
import axios from 'axios';
import ImagesContext from '../context/image-context';

export const SearchBar = () => {
    const { links, setLinks } = useContext(ImagesContext)
    const [ imagesTopic, setImagesTopic ] = useState('');

    const handleSearchImages = (e) => {
        e.preventDefault();
    
        const topic = e.target.elements.topic.value;
        setRandomImagesTopic(topic);

        e.target.elements.topic.value = '';
    };

    const setRandomImagesTopic = (topic) => {
        console.log(topic);
        setImagesTopic(topic);

        /* axios.get('https://api.unsplash.com/photos/random?client_id=oniJuiRR76JxprRNyb6MuxBv8al935ja6I9n2YIKjjU', {
            params: {
                query: topic,
                count: 10
            }
        })
        .then(function (response) {
            const imagesLinks = response.data.map((image) => {
                return image.urls.regular;
            });
            setLinks(imagesLinks);
        })  */

        setLinks(["https://images.unsplash.com/photo-1500389783522-18c9d0d14cbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MDUwODV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzUyNjEwNzI&ixlib=rb-4.0.3&q=80&w=1080",
        "https://images.unsplash.com/photo-1484593068577-0b446a79ed33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MDUwODV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzUyNjEwNzI&ixlib=rb-4.0.3&q=80&w=1080",
        "https://images.unsplash.com/photo-1518021964703-4b2030f03085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MDUwODV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzUyNjEwNzI&ixlib=rb-4.0.3&q=80&w=1080",
        "https://images.unsplash.com/photo-1452621946466-c0f2ff2ff100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MDUwODV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzUyNjEwNzI&ixlib=rb-4.0.3&q=80&w=1080",
        "https://images.unsplash.com/photo-1475694867812-f82b8696d610?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MDUwODV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzUyNjEwNzI&ixlib=rb-4.0.3&q=80&w=1080",
        "https://images.unsplash.com/photo-1531101860752-fdad86cec994?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MDUwODV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzUyNjEwNzI&ixlib=rb-4.0.3&q=80&w=1080",
        "https://images.unsplash.com/photo-1498429089284-41f8cf3ffd39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MDUwODV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzUyNjEwNzI&ixlib=rb-4.0.3&q=80&w=1080",
        "https://images.unsplash.com/photo-1495602787267-96ab76127c2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MDUwODV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzUyNjEwNzI&ixlib=rb-4.0.3&q=80&w=1080",
        "https://images.unsplash.com/photo-1516801197880-8abcfc4e3516?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MDUwODV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzUyNjEwNzI&ixlib=rb-4.0.3&q=80&w=1080",
        "https://images.unsplash.com/photo-1456404936811-e17d118812ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MDUwODV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzUyNjEwNzI&ixlib=rb-4.0.3&q=80&w=1080"]); 
    }

    return (
        <div>
            <form onSubmit={handleSearchImages}>
                <HStack maxWidth="600px" mx="auto" pt="30px" px="10px">
                    <Input type='text' name="topic" placeholder='Search...' border='1px' borderColor='gray'/>
                    <Button bg='#121847' color='white' type='submit'><SearchIcon /></Button>
                </HStack>
            </form>
            <Flex flexWrap='wrap' maxWidth="600px" mx="auto" py="20px" px="10px" justifyContent='center' alignItems='center' gap='5%' >
                <Button bg='#121847' color='white' flex='1' onClick={(e) => setRandomImagesTopic('Mountain')}>Mountain</Button>
                <Button bg='#121847' color='white' flex='1' onClick={(e) => setRandomImagesTopic('Beaches')}>Beaches</Button>
                <Button bg='#121847' color='white' flex='1' onClick={(e) => setRandomImagesTopic('Birds')}>Birds</Button>
                <Button bg='#121847' color='white' flex='1' onClick={(e) => setRandomImagesTopic('Food')}>Food</Button>
            </Flex>
            <Heading textAlign='center' fontWeight='500' fontSize='48' py='30px'>{imagesTopic} Pictures</Heading>
        </div>
    )
}

export default SearchBar;