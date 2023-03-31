import {FC} from "react"
import Paper from "@mui/material/Paper"
import ButtonGroup from "@mui/material/ButtonGroup"
import Button from "@mui/material/Button"
import RemoveIcon from '@mui/icons-material/Remove'
import AddIcon from '@mui/icons-material/Add'
import {GoodType} from "features/goods/goodsSlice"

type Props = {
    cartMode?: boolean
    good: GoodType
    saveGoods: (good: GoodType) => void
    deleteGoods: (good: GoodType) => void
}

export const GoodsCard: FC<Props> = ({cartMode = false, good, saveGoods, deleteGoods}) => {
    return (
        <Paper elevation={3} sx={{
            display: 'flex',
            flexDirection: !cartMode ? 'column' : 'row',
            justifyContent: !cartMode ? 'normal' : 'space-between',
            alignItems: 'center',
        }}>
            <div style={{height: '80%'}}><img style={{height: '100%'}} src={good.image} alt="img"/></div>
            <div>{good.title}</div>
            <div>$ {good.price}</div>
            {cartMode && <div>x{good.quantity || 1}</div>}
            <ButtonGroup size='small'>
                <Button aria-label="reduce" onClick={() => deleteGoods(good)}>
                    <RemoveIcon fontSize="small"/>
                </Button>
                <Button aria-label="increase" onClick={() => saveGoods(good)}>
                    <AddIcon fontSize="small"/>
                </Button>
            </ButtonGroup>
        </Paper>
    )
}