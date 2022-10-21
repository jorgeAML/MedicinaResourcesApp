using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.ComponentModel.Design;
using System.Security.Policy;

namespace MedicinaResourcesApp.Pages;

public class IndexModelDep: PageModel
{
    private readonly ILogger<IndexModelDep> _logger;

    public IndexModelDep(ILogger<IndexModelDep> logger)
    {
        _logger = logger;
    }
    public void OnGet()
    {
        
    }
}