using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace MedicinaResourcesApp.Pages;

public class IndexModelSH6 : PageModel
{
    private readonly ILogger<IndexModelSH6> _logger;

    public IndexModelSH6(ILogger<IndexModelSH6> logger)
    {
        _logger = logger;
    }

    public void OnGet()
    {

    }
}