import { useEffect, useState } from "react"
import { Dropdown, Form, Checkbox } from "semantic-ui-react"

function UserFilter({ sortBy, onSortSelect, onPlantSelect, plants}){
    const plantOptions = plants.map(plant => {
        return {key: plant, value: plant, text: plant}
    })

    return(
        <>
        <h3>Filter Users</h3>
        <Dropdown 
            placeholder="Select Plant"
            fluid
            search
            selection
            clearable
            options={plantOptions}
            onChange={(e, {value}) => onPlantSelect(value)}
        />
        <br></br>
        <h3>Sort Users</h3>
        <Form>
            <Form.Field>
                <Checkbox
                    radio
                    label = 'Most Plants'
                    name = 'plants'
                    value='plants'
                    checked={sortBy === 'plants'}
                    onChange={(e, data) => onSortSelect(data.value)}
                />
            </Form.Field>
            <Form.Field>
                <Checkbox
                    radio
                    label = 'Most Cares'
                    name = 'cares'
                    value='cares'
                    checked={sortBy === 'cares'}
                    onChange={(e, data) => onSortSelect(data.value)}
                />
            </Form.Field>
        </Form>
        </>
    )
}

export default UserFilter