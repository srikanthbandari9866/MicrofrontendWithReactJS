using Microsoft.OpenApi.Models;

namespace POD1Backend
{
    internal class Info : OpenApiInfo
    {
        public string Title { get; set; }
        public string Version { get; set; }
    }
}