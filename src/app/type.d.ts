interface Products {
    _id: string;
    title: string;
    description: string;
    productImage: {
        assets: {
            _ref: string;
        };
    };
    price: number;
    tags: string[];
    dicountPercentage: number;
    isNew: boolean;
}