import React, { useState } from 'react'
import Head from 'next/head'
import {
  Link,
  Flex,
  Heading,
  InputGroup,
  Text,
  Input,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberDecrementStepper
} from '@chakra-ui/react'

export default function Home() {
  const [team1, setTeam1] = useState('')
  const [team2, setTeam2] = useState('')
  const [team1goals, setTeam1goals] = useState(0)
  const [team2goals, setTeam2goals] = useState(0)

  const href = `http://localhost:3000/api/game-result.png?teams=${team1}x${team2}&result=${team1goals}x${team2goals}`

  return (
    <>
      <Head>
        <title>Soccer Result Image Maker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex flexDir="column" maxW="1200px" w="80%" mx="auto" mt="40">
        <Heading as="h1" textAlign="center" mx="auto" color="green.500">
          Soccer Result Image Generator
        </Heading>

        <Flex
          mt="10"
          flexDir={{ sm: 'column', lg: 'row' }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Input
            value={team1}
            onChange={e => setTeam1(e.target.value)}
            placeholder="Team 1"
            w={{ sm: '100%', lg: '48%' }}
            focusBorderColor="green.200"
            size="lg"
            mb={{ sm: '8', lg: '0' }}
          />

          <Input
            value={team2}
            onChange={e => setTeam2(e.target.value)}
            placeholder="Team 2"
            w={{ sm: '100%', lg: '48%' }}
            focusBorderColor="green.200"
            size="lg"
          />
        </Flex>

        <Flex
          flexDir={{ sm: 'column', lg: 'row' }}
          justifyContent="space-around"
          mt="10"
        >
          <Flex flexDir="column">
            <Text maxW="320px">{team1}</Text>
            <NumberInput
              min={0}
              value={team1goals}
              onChange={value => setTeam1goals(parseInt(value))}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Flex>

          <Flex flexDir="column">
            <Text maxW="320px">{team2}</Text>
            <NumberInput
              min={0}
              value={team2goals}
              onChange={value => setTeam2goals(parseInt(value))}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Flex>
        </Flex>

        {team1 && team2 && <Link href={href}>Get Image URL</Link>}
      </Flex>
    </>
  )
}
