import React from 'react'

export default function MoveConfigList({moves = []}) {
    return (
        <table>
            <tbody>
                <tr>
                    <th>Move</th>
                    <th>Kills</th>
                </tr>
                {
                    moves.map((move, k) => (
                        <tr key={k}>
                            <td>{move.name}</td>
                            <td>{move.kills.name}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}
