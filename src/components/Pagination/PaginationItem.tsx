import { Button } from "@chakra-ui/react";

interface PaginationsItemProps {
  isCurrent?: boolean;
  number: number;
}

export function PaginationItem({ isCurrent = false, number }: PaginationsItemProps) {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="green"
        disabled
        _disable={{
          bgColor: 'green.500',
          cursor: 'default'
        }}
      >{number}</Button>
    );
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      bgColor="gray.700"
      _hover={{
        bgColor: 'gray.500',

      }}
    >{number}</Button>
  );
}