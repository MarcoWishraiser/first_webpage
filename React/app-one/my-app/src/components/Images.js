import React, { useState, useContext } from "react";
import { 
    Image, 
    Flex,
    Link
} from '@chakra-ui/react';
import ImagesContext from "../context/image-context";

export function Images(props) {
    const { links, setLinks } = useContext(ImagesContext)


    return (
        <div>
            <Flex flexWrap='wrap' justifyContent='center' alignItems='center' gap='10' px='10px' pb='30px'>
                {links.map((link, index) => {
                    return (
                        <Link href={link}>
                            <Image w="300px" h="300px" src={link} key={index} alt='Dan Abramov' />
                        </Link>
                    );
                })}    
            </Flex>
        </div>
    );
};

export default Images;