    
    import * as _p from 'pareto-core/dist/expression'
    
    import * as t_signatures from "../../../../../../interface/generated/liana/schemas/server/deserialize"
    
    import * as v_deserialize from "astn-core/dist/implementation/manual/schemas/parse_tree/refiners/list_of_characters"
    
    import * as v_unmarshall from "./astn_parse_tree"
    
    export const Diagnostic_Severity: t_signatures.Diagnostic_Severity = ($, abort, $p) => v_unmarshall.Diagnostic_Severity(
        v_deserialize.Document(
            $,
            ($) => abort(
                ['parse error', $],
            ),
            {
                'document resource identifier': $p['document resource identifier'],
                'tab size': $p['tab size'],
            },
        )['content'],
        ($) => abort(
            ['unmarshall error', $],
        ),
    )
    
    export const Position: t_signatures.Position = ($, abort, $p) => v_unmarshall.Position(
        v_deserialize.Document(
            $,
            ($) => abort(
                ['parse error', $],
            ),
            {
                'document resource identifier': $p['document resource identifier'],
                'tab size': $p['tab size'],
            },
        )['content'],
        ($) => abort(
            ['unmarshall error', $],
        ),
    )
    
    export const Range: t_signatures.Range = ($, abort, $p) => v_unmarshall.Range(
        v_deserialize.Document(
            $,
            ($) => abort(
                ['parse error', $],
            ),
            {
                'document resource identifier': $p['document resource identifier'],
                'tab size': $p['tab size'],
            },
        )['content'],
        ($) => abort(
            ['unmarshall error', $],
        ),
    )
    
    export const Diagnostic: t_signatures.Diagnostic = ($, abort, $p) => v_unmarshall.Diagnostic(
        v_deserialize.Document(
            $,
            ($) => abort(
                ['parse error', $],
            ),
            {
                'document resource identifier': $p['document resource identifier'],
                'tab size': $p['tab size'],
            },
        )['content'],
        ($) => abort(
            ['unmarshall error', $],
        ),
    )
    
    export const Diagnostics: t_signatures.Diagnostics = ($, abort, $p) => v_unmarshall.Diagnostics(
        v_deserialize.Document(
            $,
            ($) => abort(
                ['parse error', $],
            ),
            {
                'document resource identifier': $p['document resource identifier'],
                'tab size': $p['tab size'],
            },
        )['content'],
        ($) => abort(
            ['unmarshall error', $],
        ),
    )
    
    export const Document_Data: t_signatures.Document_Data = ($, abort, $p) => v_unmarshall.Document_Data(
        v_deserialize.Document(
            $,
            ($) => abort(
                ['parse error', $],
            ),
            {
                'document resource identifier': $p['document resource identifier'],
                'tab size': $p['tab size'],
            },
        )['content'],
        ($) => abort(
            ['unmarshall error', $],
        ),
    )
    
    export const Hover_Texts: t_signatures.Hover_Texts = ($, abort, $p) => v_unmarshall.Hover_Texts(
        v_deserialize.Document(
            $,
            ($) => abort(
                ['parse error', $],
            ),
            {
                'document resource identifier': $p['document resource identifier'],
                'tab size': $p['tab size'],
            },
        )['content'],
        ($) => abort(
            ['unmarshall error', $],
        ),
    )
    
    export const Optional_Hover_Texts: t_signatures.Optional_Hover_Texts = ($, abort, $p) => v_unmarshall.Optional_Hover_Texts(
        v_deserialize.Document(
            $,
            ($) => abort(
                ['parse error', $],
            ),
            {
                'document resource identifier': $p['document resource identifier'],
                'tab size': $p['tab size'],
            },
        )['content'],
        ($) => abort(
            ['unmarshall error', $],
        ),
    )
    
    export const On_Hover_Result: t_signatures.On_Hover_Result = ($, abort, $p) => v_unmarshall.On_Hover_Result(
        v_deserialize.Document(
            $,
            ($) => abort(
                ['parse error', $],
            ),
            {
                'document resource identifier': $p['document resource identifier'],
                'tab size': $p['tab size'],
            },
        )['content'],
        ($) => abort(
            ['unmarshall error', $],
        ),
    )
    
    export const Completion_Items: t_signatures.Completion_Items = ($, abort, $p) => v_unmarshall.Completion_Items(
        v_deserialize.Document(
            $,
            ($) => abort(
                ['parse error', $],
            ),
            {
                'document resource identifier': $p['document resource identifier'],
                'tab size': $p['tab size'],
            },
        )['content'],
        ($) => abort(
            ['unmarshall error', $],
        ),
    )
    
    export const Optional_Completion_Items: t_signatures.Optional_Completion_Items = ($, abort, $p) => v_unmarshall.Optional_Completion_Items(
        v_deserialize.Document(
            $,
            ($) => abort(
                ['parse error', $],
            ),
            {
                'document resource identifier': $p['document resource identifier'],
                'tab size': $p['tab size'],
            },
        )['content'],
        ($) => abort(
            ['unmarshall error', $],
        ),
    )
    
    export const On_Completion_Result: t_signatures.On_Completion_Result = ($, abort, $p) => v_unmarshall.On_Completion_Result(
        v_deserialize.Document(
            $,
            ($) => abort(
                ['parse error', $],
            ),
            {
                'document resource identifier': $p['document resource identifier'],
                'tab size': $p['tab size'],
            },
        )['content'],
        ($) => abort(
            ['unmarshall error', $],
        ),
    )
    
    export const On_Validate_Document_Result: t_signatures.On_Validate_Document_Result = ($, abort, $p) => v_unmarshall.On_Validate_Document_Result(
        v_deserialize.Document(
            $,
            ($) => abort(
                ['parse error', $],
            ),
            {
                'document resource identifier': $p['document resource identifier'],
                'tab size': $p['tab size'],
            },
        )['content'],
        ($) => abort(
            ['unmarshall error', $],
        ),
    )
    
    export const Convert_To_JSON_Parameters: t_signatures.Convert_To_JSON_Parameters = ($, abort, $p) => v_unmarshall.Convert_To_JSON_Parameters(
        v_deserialize.Document(
            $,
            ($) => abort(
                ['parse error', $],
            ),
            {
                'document resource identifier': $p['document resource identifier'],
                'tab size': $p['tab size'],
            },
        )['content'],
        ($) => abort(
            ['unmarshall error', $],
        ),
    )
    
    export const Seal_Parameters: t_signatures.Seal_Parameters = ($, abort, $p) => v_unmarshall.Seal_Parameters(
        v_deserialize.Document(
            $,
            ($) => abort(
                ['parse error', $],
            ),
            {
                'document resource identifier': $p['document resource identifier'],
                'tab size': $p['tab size'],
            },
        )['content'],
        ($) => abort(
            ['unmarshall error', $],
        ),
    )
    
    export const On_Completion_Parameters: t_signatures.On_Completion_Parameters = ($, abort, $p) => v_unmarshall.On_Completion_Parameters(
        v_deserialize.Document(
            $,
            ($) => abort(
                ['parse error', $],
            ),
            {
                'document resource identifier': $p['document resource identifier'],
                'tab size': $p['tab size'],
            },
        )['content'],
        ($) => abort(
            ['unmarshall error', $],
        ),
    )
    
    export const On_Hover_Parameters: t_signatures.On_Hover_Parameters = ($, abort, $p) => v_unmarshall.On_Hover_Parameters(
        v_deserialize.Document(
            $,
            ($) => abort(
                ['parse error', $],
            ),
            {
                'document resource identifier': $p['document resource identifier'],
                'tab size': $p['tab size'],
            },
        )['content'],
        ($) => abort(
            ['unmarshall error', $],
        ),
    )
    
    export const Validate_Document_Parameters: t_signatures.Validate_Document_Parameters = ($, abort, $p) => v_unmarshall.Validate_Document_Parameters(
        v_deserialize.Document(
            $,
            ($) => abort(
                ['parse error', $],
            ),
            {
                'document resource identifier': $p['document resource identifier'],
                'tab size': $p['tab size'],
            },
        )['content'],
        ($) => abort(
            ['unmarshall error', $],
        ),
    )
