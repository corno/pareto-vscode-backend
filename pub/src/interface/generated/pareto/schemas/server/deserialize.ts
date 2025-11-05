import * as _pt from 'exupery-core-types'

import * as _i_out from "./data_types/target"
import * as _i_vd from "./value_deserializers"

// **** TYPES

export type _T_Completion_Items = (
    $$_: string,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Completion_Items

export type _T_Convert_To_JSON_Parameters = (
    $$_: string,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Convert_To_JSON_Parameters

export type _T_Diagnostic = (
    $$_: string,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Diagnostic

export type _T_Diagnostic_Severity = (
    $$_: string,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Diagnostic_Severity

export type _T_Diagnostics = (
    $$_: string,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Diagnostics

export type _T_Document_Data = (
    $$_: string,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Document_Data

export type _T_Hover_Texts = (
    $$_: string,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Hover_Texts

export type _T_On_Completion_Parameters = (
    $$_: string,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_On_Completion_Parameters

export type _T_On_Completion_Result = (
    $$_: string,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_On_Completion_Result

export type _T_On_Hover_Parameters = (
    $$_: string,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_On_Hover_Parameters

export type _T_On_Hover_Result = (
    $$_: string,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_On_Hover_Result

export type _T_On_Validate_Document_Result = (
    $$_: string,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_On_Validate_Document_Result

export type _T_Optional_Completion_Items = (
    $$_: string,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Optional_Completion_Items

export type _T_Optional_Hover_Texts = (
    $$_: string,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Optional_Hover_Texts

export type _T_Position = (
    $$_: string,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Position

export type _T_Range = (
    $$_: string,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Range

export type _T_Seal_Parameters = (
    $$_: string,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Seal_Parameters

export type _T_Validate_Document_Parameters = (
    $$_: string,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Validate_Document_Parameters

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Completion_Items = _T_Completion_Items

export type Convert_To_JSON_Parameters = _T_Convert_To_JSON_Parameters

export type Diagnostic = _T_Diagnostic

export type Diagnostic_Severity = _T_Diagnostic_Severity

export type Diagnostics = _T_Diagnostics

export type Document_Data = _T_Document_Data

export type Hover_Texts = _T_Hover_Texts

export type On_Completion_Parameters = _T_On_Completion_Parameters

export type On_Completion_Result = _T_On_Completion_Result

export type On_Hover_Parameters = _T_On_Hover_Parameters

export type On_Hover_Result = _T_On_Hover_Result

export type On_Validate_Document_Result = _T_On_Validate_Document_Result

export type Optional_Completion_Items = _T_Optional_Completion_Items

export type Optional_Hover_Texts = _T_Optional_Hover_Texts

export type Position = _T_Position

export type Range = _T_Range

export type Seal_Parameters = _T_Seal_Parameters

export type Validate_Document_Parameters = _T_Validate_Document_Parameters

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Completion_Items {
    export type CONTEXT = string
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Completion_Items
}

export namespace _T_Convert_To_JSON_Parameters {
    export type CONTEXT = string
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Convert_To_JSON_Parameters
}

export namespace _T_Diagnostic {
    export type CONTEXT = string
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Diagnostic
}

export namespace _T_Diagnostic_Severity {
    export type CONTEXT = string
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Diagnostic_Severity
}

export namespace _T_Diagnostics {
    export type CONTEXT = string
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Diagnostics
}

export namespace _T_Document_Data {
    export type CONTEXT = string
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Document_Data
}

export namespace _T_Hover_Texts {
    export type CONTEXT = string
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Hover_Texts
}

export namespace _T_On_Completion_Parameters {
    export type CONTEXT = string
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_On_Completion_Parameters
}

export namespace _T_On_Completion_Result {
    export type CONTEXT = string
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_On_Completion_Result
}

export namespace _T_On_Hover_Parameters {
    export type CONTEXT = string
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_On_Hover_Parameters
}

export namespace _T_On_Hover_Result {
    export type CONTEXT = string
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_On_Hover_Result
}

export namespace _T_On_Validate_Document_Result {
    export type CONTEXT = string
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_On_Validate_Document_Result
}

export namespace _T_Optional_Completion_Items {
    export type CONTEXT = string
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Optional_Completion_Items
}

export namespace _T_Optional_Hover_Texts {
    export type CONTEXT = string
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Optional_Hover_Texts
}

export namespace _T_Position {
    export type CONTEXT = string
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Position
}

export namespace _T_Range {
    export type CONTEXT = string
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Range
}

export namespace _T_Seal_Parameters {
    export type CONTEXT = string
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Seal_Parameters
}

export namespace _T_Validate_Document_Parameters {
    export type CONTEXT = string
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Validate_Document_Parameters
}

// *** ALIASES FOR NESTED TYPES

export namespace Completion_Items {
    export type CONTEXT = string
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Completion_Items
}

export namespace Convert_To_JSON_Parameters {
    export type CONTEXT = string
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Convert_To_JSON_Parameters
}

export namespace Diagnostic {
    export type CONTEXT = string
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Diagnostic
}

export namespace Diagnostic_Severity {
    export type CONTEXT = string
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Diagnostic_Severity
}

export namespace Diagnostics {
    export type CONTEXT = string
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Diagnostics
}

export namespace Document_Data {
    export type CONTEXT = string
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Document_Data
}

export namespace Hover_Texts {
    export type CONTEXT = string
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Hover_Texts
}

export namespace On_Completion_Parameters {
    export type CONTEXT = string
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_On_Completion_Parameters
}

export namespace On_Completion_Result {
    export type CONTEXT = string
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_On_Completion_Result
}

export namespace On_Hover_Parameters {
    export type CONTEXT = string
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_On_Hover_Parameters
}

export namespace On_Hover_Result {
    export type CONTEXT = string
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_On_Hover_Result
}

export namespace On_Validate_Document_Result {
    export type CONTEXT = string
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_On_Validate_Document_Result
}

export namespace Optional_Completion_Items {
    export type CONTEXT = string
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Optional_Completion_Items
}

export namespace Optional_Hover_Texts {
    export type CONTEXT = string
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Optional_Hover_Texts
}

export namespace Position {
    export type CONTEXT = string
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Position
}

export namespace Range {
    export type CONTEXT = string
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Range
}

export namespace Seal_Parameters {
    export type CONTEXT = string
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Seal_Parameters
}

export namespace Validate_Document_Parameters {
    export type CONTEXT = string
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Validate_Document_Parameters
}
