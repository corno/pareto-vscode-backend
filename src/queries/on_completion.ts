import * as _easync from 'exupery-core-async'
import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import * as d from "../vscode_server_data_types"

import { $$ as load_astn_document } from "pareto/dist/queries/load_pareto_document"

import * as t_find_completion_items from "../transformations/find_completion_items"
import * as t_backend_location from "../transformations/backend_location"




export const $$ = (
	$p: {
		'content': string
		'file path': string
		'position': d.Position
	},
): _easync.Guaranteed_Query_Result<d.On_Completion_Result> => load_astn_document(
	{
		'content': $p.content,
		'file path': $p['file path'],
	}
).map(($): d.On_Completion_Result => ({
	'completion items': t_find_completion_items.Node($, {
		'location': t_backend_location.Relative_Location($p.position),
		'full path': ``,
		'id path': ``,
	}).transform(
		($) => $,
		() => _ea.array_literal([]),
	)
})).catch(($) => {
	return _easync.query.guaranteed['create result']({
		'completion items': _ea.array_literal([
			{
				'label': `Error: ${$[0]}`,
			}
		])
	})
})
