import { FC } from "react";

const possiblesSizes = ['XS','S','M','L','XL','XXL'];

interface Props{
    selectedSize: string;
    onSizeChange: ( size: string) => void;
}

const renderOptions = () => {
    return possiblesSizes.map((size) => (
        <option key={size} value={size}>
            {size}
        </option>
    ));
};

export const SizeSelector:FC<Props> = ({ selectedSize, onSizeChange }) => {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newSize = event.target.value;
        onSizeChange(newSize);
    };
    return (
        
        <div style={{display: 'block'}}>
            {
                possiblesSizes.map( size => (
                    <button key={ size } className = { selectedSize === size ? 'active': '' } onClick={ () => onSizeChange( size ) }>
                        { size }
                    </button>
                ))
            }
            <div style={{display: 'block'}}> 
            <select id="size" value={ selectedSize } onChange={ handleChange }>
                {
                    renderOptions()    
                }
                </select>
            </div>
        </div>
        
    )
}

