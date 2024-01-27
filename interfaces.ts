interface SearchResultTopnavProps {
    searchValue: string;
};

interface DropdownMenuProps {
    label: string;
    options: string[];
};

interface SearchbarProps {
    onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    searchValue: string;
};

interface SearchResults {
    id: number;
    title: string;
    imagesrc: string;
    address1: string;
    address2: string;
    price: number;

    room: number;
    bathroom: number;
    area: number;
};

interface SearchResultProps {
    searchResult: SearchResults[];
};

interface RoomCardProps {
    searchResult: SearchResults;
}

export type { SearchResultTopnavProps, DropdownMenuProps, SearchbarProps, SearchResults, SearchResultProps, RoomCardProps };